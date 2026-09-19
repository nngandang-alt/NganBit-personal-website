-- ==========================================================
-- SUPABASE DATABASE & STORAGE SETUP SCRIPT
-- Project: Đặng Vũ Thùy Ngân — Personal Portfolio
-- ==========================================================

-- 1. BẢNG LƯU TIN NHẮN LIÊN HỆ (contact_messages)
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    organization TEXT,
    topic TEXT,
    message TEXT NOT NULL,
    status TEXT NOT NULL DEFAULT 'unread'
);

-- Kích hoạt Row Level Security (RLS) để bảo vệ dữ liệu
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Cho phép khách truy cập (anon & authenticated) gửi thông điệp vào bảng
CREATE POLICY "Cho phep khach gui tin nhan"
    ON public.contact_messages
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (true);

-- Chỉ những ai đăng nhập tài khoản quản trị (authenticated) mới có thể đọc danh sách tin nhắn
CREATE POLICY "Chi admin moi duoc doc tin nhan"
    ON public.contact_messages
    FOR SELECT
    TO authenticated
    USING (true);

-- Cho phép admin cập nhật trạng thái tin nhắn (vd: đã đọc, đang xử lý)
CREATE POLICY "Chi admin moi duoc cap nhat tin nhan"
    ON public.contact_messages
    FOR UPDATE
    TO authenticated
    USING (true);


-- 2. BUCKET LƯU TRỮ HÌNH ẢNH / TÀI LIỆU (portfolio)
-- Tạo bucket công khai tên 'portfolio' nếu chưa có
INSERT INTO storage.buckets (id, name, public)
VALUES ('portfolio', 'portfolio', true)
ON CONFLICT (id) DO UPDATE SET public = true;

-- Cho phép mọi người xem và tải file công khai từ bucket 'portfolio'
CREATE POLICY "Cho phep cong khai xem va tai file"
    ON storage.objects
    FOR SELECT
    TO public
    USING (bucket_id = 'portfolio');

-- Cho phép upload file vào bucket 'portfolio'
CREATE POLICY "Cho phep upload file vao bucket"
    ON storage.objects
    FOR INSERT
    TO anon, authenticated
    WITH CHECK (bucket_id = 'portfolio');

-- Cho phép cập nhật/thay thế file
CREATE POLICY "Cho phep cap nhat file"
    ON storage.objects
    FOR UPDATE
    TO authenticated
    USING (bucket_id = 'portfolio');

-- Cho phép xóa file (chỉ admin đăng nhập)
CREATE POLICY "Cho phep xoa file"
    ON storage.objects
    FOR DELETE
    TO authenticated
    USING (bucket_id = 'portfolio');
