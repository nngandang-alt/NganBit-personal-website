# Guidelines for AI Assistant in this Workspace

## 1. Giảm Permission Prompts & Hạn Chế Lệnh Destructive
- **Hạn chế tối đa destructive commands**: Tuyệt đối không dùng `rm`, `rm -f` hoặc xóa file/component chỉ vì chúng không còn được render hoặc import.
- **Xử lý component cũ không còn dùng**:
  1. Ngừng import/sử dụng component đó trong code.
  2. Giữ nguyên file component cũ tạm thời thay vì xóa.
  3. Chỉ xóa file khi việc xóa là bắt buộc để tránh xung đột (conflict) hoặc lỗi build.
- **Gom lệnh khi cần xóa (Batching)**: Nếu bắt buộc phải xóa nhiều file, hãy gom tất cả vào **MỘT batch command duy nhất** để người dùng chỉ cần approve 1 lần.
- **An toàn workspace**: Ưu tiên phương án chỉnh sửa an toàn trong phạm vi workspace nếu kết quả kỹ thuật tương đương. Tuyệt đối không tìm cách bypass cơ chế bảo mật (security mechanisms).

## 2. Quy Trình Làm Việc Bắt Buộc (Continuous Workflow)
- **Tự động push GitHub**: Mỗi lần hoàn thành một lượt sửa code, tự động commit và push lên `git origin main`.
- **Cung cấp link Localhost**: Luôn cung cấp đường link Localhost đang hoạt động trong phản hồi.
- **Bảo toàn tính xác thực (Factual Integrity)**:
  - Giữ đúng chức danh và số liệu chính xác theo hồ sơ của Đặng Vũ Thùy Ngân (Ngân Bit).
  - Không tự ý bịa đặt hay suy đoán số liệu/dự án; ghi nhận rõ ràng vào `CONTENT_GAPS.md` khi còn thiếu dữ liệu.
