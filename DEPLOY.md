# 🚀 Hướng Dẫn Deploy Lên Vercel

## ✅ Các Lỗi Đã Fix

1. **Supabase Config**: Đã thêm fallback client để không crash khi không có env variables
2. **Vite Config**: Đã optimize build với code splitting
3. **Vercel Config**: Đã cập nhật routing và security headers
4. **Build Warning**: Đã fix warning về chunk size
5. **Peer Dependency Conflict**: Đã thay thế `react-swipeable-views` bằng `react-swipeable` để tương thích với React 18

## 📋 Bước Deploy

### 1. Tạo File .env (Tùy chọn)

Nếu muốn chức năng đầy đủ, tạo file `.env` trong thư mục gốc:

```env
VITE_SUPABASE_URL=https://wddgqlkknioqcigceonx.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

### 2. Push Code Lên GitHub

```bash
git add .
git commit -m "Fix peer dependency conflict: replace react-swipeable-views with react-swipeable"
git push origin main
```

### 3. Deploy Lên Vercel

#### Cách 1: Từ GitHub

1. Vào [vercel.com](https://vercel.com)
2. Import project từ GitHub
3. Chọn repository `Portofolio_V5`
4. Vercel sẽ tự động detect là Vite project
5. Click "Deploy"

#### Cách 2: Từ CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 4. Cấu Hình Environment Variables (Nếu cần)

Trong Vercel dashboard:

1. Vào project settings
2. Chọn "Environment Variables"
3. Thêm:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

## 🎯 Kết Quả

- ✅ Build thành công
- ✅ Code splitting đã optimize
- ✅ SPA routing hoạt động
- ✅ Security headers đã thêm
- ✅ Supabase fallback đã fix
- ✅ Peer dependency conflict đã resolve
- ✅ Swipe functionality vẫn hoạt động với react-swipeable

## 🔧 Troubleshooting

Nếu gặp lỗi:

1. Kiểm tra build logs trong Vercel
2. Đảm bảo Node.js version 18+ trên Vercel
3. Kiểm tra environment variables
4. Nếu vẫn có peer dependency issues, chạy: `npm install --legacy-peer-deps`

## 🆕 Thay Đổi Mới

- **react-swipeable-views** → **react-swipeable** (tương thích React 18)
- Swipe functionality vẫn hoạt động bình thường
- Không còn peer dependency warnings

**Website sẽ hoạt động ngay cả khi không có Supabase config!**
