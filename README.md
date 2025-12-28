# Nuvent.io

Dynamic Infrastructure Orchestration. Precision at Scale.

This repository contains the source code for the [nuvent.io](https://nuvent.io) website, built with [Hugo](https://gohugo.io/) and deployed on [Firebase Hosting](https://firebase.google.com/docs/hosting).

## Overview

Nuvent is a platform for dynamic infrastructure orchestration. This website serves as the primary landing page and documentation hub for the project.

## Prerequisites

- [Hugo](https://gohugo.io/getting-started/installing/) (extended version recommended)
- [Node.js & npm](https://nodejs.org/en/download/)
- [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli)
- [go-task](https://taskfile.dev/installation/) (optional, but recommended for task orchestration)

## Development

To run the site locally:

```bash
task serve
```

Or without `task`:

```bash
hugo server -D
```

The site will be available at `http://localhost:1313/`.

## Build

To generate the static site:

```bash
task build
```

Or without `task`:

```bash
hugo --gc --minify
```

The output will be in the `public/` directory.

## Deployment

### Manual Deployment

To deploy manually to Firebase Hosting:

```bash
task deploy
```

Or without `task`:

```bash
hugo --gc --minify
firebase deploy --only hosting:nuvent-io
```

### Automated Deployment

The site is automatically deployed to Firebase Hosting via GitHub Actions whenever changes are pushed to the `main` branch.

## Project Structure

- `content/`: Markdown files for site content.
- `layouts/`: HTML templates for the site.
- `static/`: Static assets (images, fonts, etc.).
- `themes/casper/`: The Hugo theme used for the site.
- `config.toml`: Hugos configuration file.
- `firebase.json`: Firebase Hosting configuration.
- `Taskfile.yaml`: Defines common project tasks.

## License

All rights reserved - &copy; 2025 Nuvent.
