import { useRouter } from "next/router";
import { useAlbumPhotos, usePhotos } from "../../hooks/useFetch";
import Navbar from "@/components/navigation";
import Loader from "@/components/loader";
import React, { useState } from "react";

export default function AlbumPage() {
  const [refresh, setRefresh] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { album, loading, error } = useAlbumPhotos(id);
  const { photos } = usePhotos(album?._id, refresh, setRefresh);

  const [editingPhotoId, setEditingPhotoId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [notification, setNotification] = useState("");

  const handleEdit = (photo) => {
    setEditingPhotoId(photo._id);
    setNewTitle(photo.title);
  };

  const handleSave = async (photoId) => {
    try {
      const res = await fetch(`/api/photos/update/${photoId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: newTitle }),
      });

      if (!res.ok) throw new Error("Failed to update title");

      const updatedPhoto = await res.json();

      const updatedPhotos = photos.map((photo) =>
        photo._id === updatedPhoto._id ? updatedPhoto : photo
      );
      // setPhotos(updatedPhotos);
      setRefresh(!refresh);

      setEditingPhotoId(null);
      setNotification("Title updated successfully!");

      setTimeout(() => {
        setNotification("");
      }, 3000);
    } catch (error) {
      console.error(error);
      setNotification("Failed to update title.");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  if (loading) return <Loader />;
  if (error) return <div>Error loading data</div>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen p-6">
        <h1 className="text-3xl font-bold text-gray-400 text-center mb-6">
          Album Photos
        </h1>
        {notification && (
          <div className="text-center mb-6">
            <p className="text-green-500">{notification}</p>
          </div>
        )}
        <div className="flex max-w-[35rem] mx-auto justify-center h-full w-full">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
            {photos.map((photo) => (
              <li
                key={photo._id}
                className="bg-neutral-700 rounded-md overflow-hidden shadow-lg"
              >
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  {editingPhotoId === photo._id ? (
                    <div className="flex items-center">
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="text-lg font-semibold text-gray-800 bg-gray-200 rounded-md px-2 py-1 mr-2"
                      />
                      <button
                        onClick={() => handleSave(photo._id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded-full hover:bg-blue-600 transition duration-300"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold text-gray-200 truncate">
                        {photo.title}
                      </p>
                      <button
                        onClick={() => handleEdit(photo)}
                        className="text-blue-400 hover:text-blue-200 transition duration-300"
                      >
                        Edit
                      </button>
                    </div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
