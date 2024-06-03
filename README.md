# Album assessment

This project is a web application that allows users to browse and interact with a collection of albums and photos. It leverages Next.js for server-side rendering and API routes, and MongoDB for data persistence. Users can view user profiles, browse albums, and view photos within each album.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Custom Hooks](#custom-hooks)
- [Testing](#testing)
<!-- - [Contributing](#contributing)
- [License](#license) -->

## Installation

1.  Clone the repository:

    `git clone https://github.com/jkitsao/assessment.git`

2.  Navigate to the project directory:

    `cd assessment`

3.  Install dependencies:

    `Yarn `

# API Routes Documentation

One of the key features of Next.js is its built-in API routes, which allow us to create serverless functions to handle backend logic. These API routes serve as endpoints for our application, enabling us to perform operations such as fetching data from a database, processing form submissions, or integrating with third-party services.

## Users API

- **GET /api/users**: Retrieve all users.
- **GET /api/users/:userId**: Retrieve a specific user by ID.

## Albums API

- **GET /api/albums**: Retrieve all albums.
- **GET /api/albums/:userId**: Retrieve albums by user ID.

## Photos API

- **GET /api/albums/info/:albumId**: Retrieve album information by album ID.
- **GET /api/photos/album-photo**: Retrieve photos by album ID.

## Custom Hooks

Hooks are used in this project to abstract away the implementation details of data fetching and state management, making our code more modular, reusable, and easier to understand.

### useUser(userId)

A custom hook to fetch user details by ID.

```jsx
import { useUser } from "./hooks/useUser";

const { user, loading, error } = useUser(userId);
```

### useAlbumPhotos(albumId)

A custom hook to fetch photos of a specific album.

```jsx
import { useAlbumPhotos } from "./hooks/useAlbumPhotos";

const { album, loading, error } = useAlbumPhotos(albumId);
```

### usePhotos()

A custom hook to fetch all photos.

```jsx
import { usePhotos } from "./hooks/usePhotos";

const { photos, loading, error } = usePhotos();
```

## Test: HomePage Component

This test suite verifies the behavior of the `Home Page` component, ensuring that it behaves correctly under different authentication statuses.

The `next-auth/react` module is mocked to simulate different authentication statuses using the useSession hook.
The `next/router`

### Running Tests

Run Jest tests using the following command:

`yarn test`
