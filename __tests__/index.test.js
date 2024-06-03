import { render, screen, waitFor } from "@testing-library/react";
import { useSession } from "next-auth/react";
import HomePage from "../pages/home"; // Adjust the import to match your file structure
import Loader from "@/components/loader";
import Navbar from "@/components/navigation";

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("../components/loader", () => <div>Mocked Loader</div>);
jest.mock("../components/navigation", () => <div>Mocked Navbar</div>);

describe("HomePage", () => {
  test("redirects to signin if unauthenticated", async () => {
    useSession.mockReturnValue({ data: null, status: "unauthenticated" });

    render(<HomePage />);

    await waitFor(() => {
      expect(require("next/router").useRouter().push).toHaveBeenCalledWith(
        "/api/auth/signin"
      );
    });
  });

  test("shows loader while fetching session", () => {
    useSession.mockReturnValue({ data: null, status: "loading" });

    render(<HomePage />);

    expect(screen.getByText("Mocked Loader")).toBeInTheDocument();
  });

  test("shows homepage content if authenticated", () => {
    useSession.mockReturnValue({
      data: { user: { name: "John Doe" } },
      status: "authenticated",
    });

    render(<HomePage />);

    expect(screen.getByText("Mocked Navbar")).toBeInTheDocument();
  });
});
