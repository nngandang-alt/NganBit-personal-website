# CONTENT_GAPS.md — Bảng Tổng hợp Thông tin & Dữ liệu Cần Bổ sung

Tài liệu này ghi nhận toàn bộ các khoảng trống thông tin (facts, số liệu, bằng chứng, hình ảnh và liên kết) mà bạn cần cung cấp hoặc xác nhận để hoàn thiện website portfolio mà không đưa bất kỳ thông tin giả định nào lên production.

---

## 1. Dữ liệu Sự nghiệp & Phạm vi Trách nhiệm (Career Facts & Scope)

| Đơn vị / Tổ chức | Chức danh chính thức | Thời gian | Dữ liệu hiện có trên web | Khoảng trống cần xác nhận / bổ sung |
| :--- | :--- | :---: | :--- | :--- |
| **FPT University** | Head of Student Relations Office | Apr 2025 — Present | Dẫn dắt hệ sinh thái trải nghiệm sinh viên quy mô lớn, quan hệ đối tác doanh nghiệp, TechX Camp. | - Quy mô đội ngũ nhân sự trực tiếp quản lý (team size).<br>- Số lượng sinh viên trong phạm vi phòng ban phục vụ. |
| **transcosmos Vietnam** | Senior Specialist, Organizational Development | Jul 2024 — Mar 2025 | Vòng đời nhân viên, hành trình 15/60/90 ngày, employee insight, role/SOW standardization, competency rubrics. | - Số lượng nhân sự trong phạm vi áp dụng bộ chuẩn hóa vai trò & khung năng lực. |
| **Savvycom** | People & Culture Lead | 2023 — 2024 | Dẫn dắt IC, engagement, culture, EVP/EB, L&D, CSR, change & crisis communication. | - Quy mô nhân sự công ty thời điểm đó (khoảng ... nhân sự?). |
| **Vua Nệm** | Acting Internal Communication Lead | 2022 — 2023 | Kích hoạt văn hóa, Thói quen C7+, Bộ quy tắc ứng xử, chương trình Happy Journey kết nối hội sở với showroom. | - Số lượng cửa hàng bán lẻ toàn quốc thời điểm triển khai (khoảng ... showroom?). |
| **CMC Corporation** | Corporate Culture Specialist | 2021 — 2022 | Nền tảng Together We Shine, truyền thông nội bộ tập đoàn công nghệ. | - Các dấu ấn dự án nội bộ tiêu biểu cần nhấn mạnh thêm. |
| **F88** | Internal Communication & Culture Specialist | 2020 — 2021 | Kênh truyền thông nội bộ, kết nối mạng lưới phòng giao dịch toàn quốc. | - Quy mô mạng lưới phòng giao dịch thời điểm đó. |
| **Bellsystem24-Hoasao** | Internal Communication Specialist | 2019 — 2020 | Storytelling, video phóng sự, phát thanh radio nội bộ cho nhân sự ca kíp. | - Quy mô nhân sự contact center thời điểm đó. |
| **FPT University (Early)** | Student Relations Officer / Community Coordinator | 2018 — 2019 | Hỗ trợ câu lạc bộ sinh viên, phát triển kỹ năng và kết nối cộng đồng người trẻ. | - Các câu lạc bộ hoặc dự án thanh niên tiêu biểu. |

---

## 2. Số liệu & Bằng chứng Kết quả (Metrics Verification)

> [!IMPORTANT]
> Toàn bộ các con số giả định (như "100+ initiatives") đã được loại bỏ hoàn toàn. Website hiện chỉ hiển thị các tuyên bố định tính đã được chứng minh. Hãy xác nhận các số liệu sau nếu bạn muốn bổ sung vào website:

- [ ] **FPTU — Building the Student Relations System**:
  - Số lượng đối tác doanh nghiệp công nghệ liên kết: `...` doanh nghiệp?
  - Thời gian phản hồi / xử lý yêu cầu sinh viên được tối ưu: `...%` hoặc `... ngày`?
- [ ] **FPTU — Tech XCamp**:
  - Số lượng sinh viên tham gia chính xác: `...` sinh viên?
  - Số lượng doanh nghiệp công nghệ đối tác đồng hành: `...` đối tác?
  - Tỷ lệ hài lòng sau chương trình: `...%`?
- [ ] **transcosmos Vietnam — Data-driven Employee Experience (15/60/90-Day)**:
  - Tỷ lệ nhân sự mới hoàn thành khảo sát 15/60/90 ngày: `...%`?
  - Tỷ lệ cải thiện về tỷ lệ giữ chân nhân sự mới (nếu có số liệu công bố): `...%`?
- [ ] **Savvycom — People & Culture**:
  - Tỷ lệ tham dự tự nguyện tại các buổi All-Hands định kỳ: `...%`?
- [ ] **Vua Nệm — Values Into Behaviors (Happy Journey & C7+)**:
  - Quy mô hệ thống showroom bán lẻ áp dụng C7+: `...` showroom?
  - Số lượng lượt vinh danh Happy Journey được trao: `...` lượt?

---

## 3. Danh mục Hình ảnh Thật Cần Cung Cấp (Image Checklist)

Hệ thống **ImagePlaceholder** hiển thị khung hình tinh tế với thông báo vị trí và tỷ lệ chuẩn. Khi bạn có ảnh thật, chỉ cần copy file vào `src/assets/` và cập nhật đường dẫn trong `src/data/portfolioData.ts`:

| Vị trí trên Website | Loại hình ảnh | Tỷ lệ khuyến nghị | Mô tả chi tiết ảnh cần bổ sung | Trạng thái |
| :--- | :--- | :---: | :--- | :---: |
| **Hero Background** | Chân dung sự kiện | **16:9** | Ảnh Thùy Ngân phát biểu tại sự kiện FPT University với micro. | **Đã có (src/assets/hero-bg.jpg)** |
| **Case 01: SRO System** | Framework / Activity | **16:9** | Sơ đồ kiến trúc trải nghiệm sinh viên hoặc ảnh điều phối hoạt động phòng ban. | *Chờ ảnh thật* |
| **Case 02: Tech XCamp** | Immersion Event | **16:9** | Toàn cảnh sinh viên tham gia Tech XCamp, hoạt động thử thách hoặc sân khấu trao giải. | *Chờ ảnh thật* |
| **Case 03: 15/60/90 Days** | EX Dashboard / Model | **16:9** | Sơ đồ hành trình vòng đời nhân viên transcosmos hoặc dashboard dữ liệu khảo sát. | *Chờ ảnh thật* |
| **Case 04: Savvycom Culture** | Hybrid Townhall | **16:9** | Sự kiện All-Hands hybrid, hoạt động văn hóa công nghệ hoặc ấn phẩm EVP. | *Chờ ảnh thật* |
| **Case 05: Vua Nệm C7+** | Retail Material | **16:9** | Sổ tay Happy Journey, bộ nhận diện Thói quen C7+ hoặc ảnh vinh danh tại cửa hàng. | *Chờ ảnh thật* |
| **Case 06: Together We Shine** | Comms Platform | **16:9** | Giao diện bản tin Together We Shine, hình ảnh phát thanh nội bộ hoặc poster chiến dịch. | *Chờ ảnh thật* |
| **Selected Work: The Face** | Culture Competition | **4:3** | Ảnh đêm chung kết hoặc ảnh các đại sứ văn hóa The Face. | *Chờ ảnh thật* |
| **Selected Work: Video Story** | Media Production | **16:9** | Hậu trường quay phóng sự nội bộ hoặc phòng thu radio podcast. | *Chờ ảnh thật* |
| **Selected Work: CSR** | Community Impact | **4:3** | Hoạt động thiện nguyện, ngày hội hiến máu hoặc dự án xã hội. | *Chờ ảnh thật* |

---

## 4. Chứng chỉ & Kênh Kết nối (Credentials & Direct Links)

- [x] **Chứng chỉ chuyên môn**:
  - Đã chuẩn hóa liên kết trực tiếp tới hồ sơ LinkedIn chính thức (`https://linkedin.com/in/thuyngandang`) làm nguồn kiểm chứng duy nhất (Source of Truth), loại bỏ hoàn toàn các chức danh/chứng chỉ giả định.
- [ ] **Kênh liên hệ trực tiếp**:
  - **Zalo**: Cung cấp link Zalo chính thức (VD: `https://zalo.me/09xxxxxxxx`) để cập nhật vào nút kết nối.
  - **CV Executive**: Cung cấp file PDF CV chính thức nếu muốn người xem có thể tải về trực tiếp từ nút "Curriculum Vitae".
