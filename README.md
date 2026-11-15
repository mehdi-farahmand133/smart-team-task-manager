
# Smart Team Task Manager

**نام دانشجو:** محمد مهدی فرهمند  
**فعالیت‌ها:** فصل ۳ و فصل ۴  
**ساعت:** ۱۱

## معرفی پروژه
این پروژه یک API ساده برای مدیریت کاربران و وظایف یک تیم است.

## فعالیت فصل ۳: طراحی API و معماری

### منابع اصلی (Resources)
- Users: مدیریت کاربران
- Tasks: مدیریت وظایف
- Auth: احراز هویت
- Reports: گزارش‌ها
- Notifications: اعلان‌ها

### Endpointهای Tasks

| Method | Endpoint | Status Code |
|---|---|---|
| GET | /api/tasks | 200 |
| GET | /api/tasks/:id | 200, 404 |
| POST | /api/tasks | 201, 400 |
| PUT | /api/tasks/:id | 200, 400, 404 |
| DELETE | /api/tasks/:id | 204, 404 |

### Endpointهای Users

| Method | Endpoint | Status Code |
|---|---|---|
| GET | /api/users | 200 |
| GET | /api/users/:id | 200, 404 |
| POST | /api/users | 201, 400 |
| PUT | /api/users/:id | 200, 400, 404 |
| DELETE | /api/users/:id | 204, 404 |

### کدهای وضعیت
- 200: درخواست موفق
- 201: ایجاد موفق
- 204: حذف موفق بدون محتوا
- 400: درخواست نامعتبر
- 401: احراز هویت لازم است
- 403: دسترسی غیرمجاز
- 404: منبع پیدا نشد
- 500: خطای سرور

### معماری پروژه

Client → API Server → Routes → Controllers → Resources

منابع اصلی پروژه شامل Users و Tasks هستند و سرور درخواست‌های مربوط به آن‌ها را مدیریت می‌کند.

## فعالیت فصل ۴: Docker

در این فعالیت، Backend با Docker بسته‌بندی و اجرا می‌شود.

### ساخت Image

```bash
docker build -t smart-task-api ./backend
```

### اجرای Container

```bash
docker run -d -p 3000:3000 --name smart-task-container smart-task-api
```

### بررسی اجرا

```bash
docker ps
```

### تست API

```bash
curl http://localhost:3000/health
```

## ساختار پروژه

```text
smart-team-task-manager/
├── README.md
├── docs/
│   ├── API-CONTRACT.md
│   └── ARCHITECTURE.md
└── backend/
    ├── Dockerfile
    ├── .dockerignore
    ├── package.json
    └── src/
        └── server.js
```

