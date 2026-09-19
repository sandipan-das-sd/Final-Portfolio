# Portfolio admin setup

The portfolio works immediately with its built-in project list. To edit content from `/admin`, configure persistent storage.

1. Create or connect a Neon Postgres database in Vercel and set `DATABASE_URL` (the code also accepts `POSTGRES_URL`).
2. Set `ADMIN_USER` and a strong `ADMIN_PASSWORD` in the deployment environment.
3. Add a Vercel Blob store and set `BLOB_READ_WRITE_TOKEN` to enable thumbnail and résumé uploads.
4. Redeploy, then open `/admin`. The browser will request the admin username and password.

The database tables and initial 16 projects are created automatically on first access. The dashboard supports creating, editing, publishing, ordering and deleting projects. Images can use a URL or be uploaded to Blob. Résumé replacement accepts PDF files up to 8 MB.
