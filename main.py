from fastapi import FastAPI

from routers import users as users_router

def create_app() -> FastAPI:
    app = FastAPI(
        title="pintere5t",
        version="1.0.0.",
        docs_url="/docs",
        redoc_url="/redoc",
        openapi_url="/openapi.json",
    )

    app.include_router(users_router.router)

    @app.get("/healthz")
    async def healthz():
        return {"status": "ok"}
    
    return app

app = create_app()