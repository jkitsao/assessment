import { useState, useEffect } from "react";

//  fetch all users
export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("/api/users");
        const data = await res.json();
        setUsers(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading, error };
}

//  fetch all albums
export function useAlbums() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch("/api/albums");
        const data = await res.json();
        setAlbums(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAlbums();
  }, []);

  return { albums, loading, error };
}

// fetch user details by ID
export function useUser(userId) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;
    async function fetchUser() {
      try {
        const res = await fetch(`/api/users/${userId}`);
        const data = await res.json();
        setUser(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [userId]);

  return { user, loading, error };
}

// fetch albums by user ID
export function useUserAlbums(userId) {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;

    async function fetchAlbums() {
      try {
        const res = await fetch(`/api/albums/${userId}`);
        const data = await res.json();
        setAlbums(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchAlbums();
  }, [userId]);

  return { albums, loading, error };
}

//  fetch photos by album ID
export function useAlbumPhotos(albumId) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!albumId) return;

    async function fetchPhotos() {
      try {
        const res = await fetch(`/api/albums/info/${albumId}`);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [albumId]);

  return { album: photos, loading, error };
}

export function usePhotos(albumId, refresh) {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!albumId) return;

    async function fetchPhotos() {
      try {
        const res = await fetch(`/api/photos/album-photo?albumId=${albumId}`);
        const data = await res.json();
        setPhotos(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchPhotos();
  }, [albumId, refresh]);

  return { photos, loading, error };
}
