
# API Contract
## Smart Team Task Manager

### 1. Resources

- Users: مدیریت کاربران
- Tasks: مدیریت وظایف
- Auth: احراز هویت
- Reports: گزارش‌گیری
- Notifications: اعلان‌ها

### 2. Tasks Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | /api/tasks | دریافت همه وظایف | 200 |
| GET | /api/tasks/:id | دریافت یک وظیفه | 200, 404 |
| POST | /api/tasks | ایجاد وظیفه | 201, 400 |
| PUT | /api/tasks/:id | ویرایش وظیفه | 200, 400, 404 |
| DELETE | /api/tasks/:id | حذف وظیفه | 204, 404 |

### 3. Users Endpoints

| Method | Endpoint | Description | Status |
|---|---|---|---|
| GET | /api/users | دریافت کاربران | 200 |
| GET | /api/users/:id | دریافت یک کاربر | 200, 404 |
| POST | /api/users | ایجاد کاربر | 201, 400 |
| PUT | /api/users/:id | ویرایش کاربر | 200, 400, 404 |
| DELETE | /api/users/:id | حذف کاربر | 204, 404 |

### 4. HTTP Status Codes

- 200 OK
- 201 Created
- 204 No Content
- 400 Bad Request
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 500 Internal Server Error

### 5. Sample Request

POST /api/tasks

```json
{
  "title": "Complete project",
  "description": "Finish activities 3 and 4",
  "userId": 1
}
```

### 6. Sample Response

```json
{
  "id": 1,
  "title": "Complete project",
  "description": "Finish activities 3 and 4",
  "userId": 1
}
```
