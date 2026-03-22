# GSD-antigravity

TypeScript starter project with:
- Express API server
- CLI entrypoint
- Vitest tests
- ESLint linting
- Docker support

## Requirements
- Node.js 22+
- npm 10+
- (Optional) Docker

## Install

```bash
npm install
```

## Run

### API (dev)

```bash
npm run dev
```

Default: `http://localhost:3000`

### API (production build)

```bash
npm run build
npm start
```

### CLI

```bash
npm run cli -- status
npm run cli -- help
```

## API Endpoints

- `GET /health` → `{ "status": "ok" }`
- `GET /` → `{ "name": "gsd-antigravity", "message": "API is running" }`

## Quality Checks

```bash
npm run lint
npm test
npm run build
```

## Smoke Test

In one terminal, start the API:

```bash
npm run dev
```

In another, test endpoints:

```bash
curl http://localhost:3000/health
curl http://localhost:3000/
```

## Docker

```bash
npm run docker:build
npm run docker:run
```

Container exposes port `3000`.
