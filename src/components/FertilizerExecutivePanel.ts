import { Panel } from './Panel';
import { escapeHtml, unsafeRawHtml } from '@/utils/sanitize';

export class FertilizerExecutivePanel extends Panel {
  constructor(id: string, title: string) {
    super({
      id,
      title,
      showCount: false,
      trackActivity: true,
      infoTooltip: 'Báo cáo điều hành & nhận định chuyên sâu giá phân bón hàng ngày/hàng tuần',
    });
    this.renderInitialContent();
  }

  private renderInitialContent(): void {
    const todayStr = new Date().toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    const html = `
      <div class="fertilizer-executive-container" style="padding: 12px; font-family: system-ui, sans-serif;">
        <!-- Header Ribbon -->
        <div style="background: linear-gradient(135deg, #1e293b, #0f172a); border: 1px solid #334155; border-radius: 8px; padding: 12px; margin-bottom: 12px;">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
            <span style="font-weight: 700; color: #38bdf8; font-size: 14px;">📊 BÁO CÁO ĐIỀU HÀNH THỊ TRƯỜNG PHÂN BÓN</span>
            <span style="background: #0369a1; color: #fff; font-size: 11px; padding: 2px 8px; border-radius: 12px; font-weight: 600;">HÀNG NGÀY & HÀNG TUẦN</span>
          </div>
          <div style="color: #94a3b8; font-size: 11px;">Cập nhật: ${escapeHtml(todayStr)} | 08:00 AM (ICT)</div>
        </div>

        <!-- Executive Summary Section -->
        <div style="background: #182232; border-left: 4px solid #0284c7; border-radius: 4px; padding: 10px; margin-bottom: 12px;">
          <div style="font-weight: 600; color: #f8fafc; font-size: 13px; margin-bottom: 4px;">💡 XU HƯỚNG TỔNG QUAN 7 NGÀY (7-DAY PRICE OUTLOOK)</div>
          <p style="color: #cbd5e1; font-size: 12px; line-height: 1.5; margin: 0;">
            • <b>Urea Toàn Cầu</b>: Xu hướng <b>TĂNG NHẸ</b> do Ấn Độ (RCF) phát hành gói thầu mới và Trung Quốc tiếp tục siết kiểm định hải quan CIQ.<br/>
            • <b>Phân Bón Việt Nam</b>: Giá Ure Phú Mỹ & Đạm Cà Mau duy trì ở mức <b>540,000 - 550,000 VNĐ/bao</b>. Nhu cầu chuẩn bị cho vụ Đông Xuân tăng dần tại ĐBSCL.
          </p>
        </div>

        <!-- Price Outlook Table Matrix -->
        <div style="margin-bottom: 12px;">
          <div style="font-weight: 600; color: #e2e8f0; font-size: 12px; margin-bottom: 6px;">📈 BẢNG TỔNG HỢP GIÁ & DỰ BÁO XU HƯỚNG</div>
          <table style="width: 100%; border-collapse: collapse; font-size: 11px; color: #e2e8f0; border: 1px solid #334155;">
            <thead>
              <tr style="background: #1e293b; color: #94a3b8; text-align: left;">
                <th style="padding: 6px; border: 1px solid #334155;">Sản phẩm</th>
                <th style="padding: 6px; border: 1px solid #334155;">Thế giới (Spot)</th>
                <th style="padding: 6px; border: 1px solid #334155;">Việt Nam (Đại lý)</th>
                <th style="padding: 6px; border: 1px solid #334155;">Dự báo 7 ngày</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 6px; border: 1px solid #334155; font-weight: 600;">Urea (Đạm)</td>
                <td style="padding: 6px; border: 1px solid #334155;">$345/MT (Middle East)</td>
                <td style="padding: 6px; border: 1px solid #334155;">545,000đ / bao 50kg</td>
                <td style="padding: 6px; border: 1px solid #334155; color: #4ade80;">↗️ Tăng nhẹ (1-2%)</td>
              </tr>
              <tr style="background: #0f172a;">
                <td style="padding: 6px; border: 1px solid #334155; font-weight: 600;">DAP</td>
                <td style="padding: 6px; border: 1px solid #334155;">$590/MT (China FOB)</td>
                <td style="padding: 6px; border: 1px solid #334155;">920,000đ / bao 50kg</td>
                <td style="padding: 6px; border: 1px solid #334155; color: #facc15;">➡️ Đi ngang</td>
              </tr>
              <tr>
                <td style="padding: 6px; border: 1px solid #334155; font-weight: 600;">Kali (MOP)</td>
                <td style="padding: 6px; border: 1px solid #334155;">$290/MT (Standard)</td>
                <td style="padding: 6px; border: 1px solid #334155;">580,000đ / bao 50kg</td>
                <td style="padding: 6px; border: 1px solid #334155; color: #facc15;">➡️ Ổn định</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 5 Factor Breakdown -->
        <div style="font-weight: 600; color: #e2e8f0; font-size: 12px; margin-bottom: 6px;">🔍 MA TRẬN 5 YẾU TỐ TÁC ĐỘNG GIÁ</div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 11px;">
          <div style="background: #1e293b; padding: 8px; border-radius: 4px; border: 1px solid #334155;">
            <div style="color: #38bdf8; font-weight: 600;">1. Nguyên liệu (Gas/Coal)</div>
            <div style="color: #94a3b8; margin-top: 2px;">• Giá Gas TTF Châu Âu: <b>€36/MWh</b> (+2%)</div>
            <div style="color: #94a3b8;">• Giá Than TQ: <b>840 RMB/Tấn</b></div>
          </div>
          <div style="background: #1e293b; padding: 8px; border-radius: 4px; border: 1px solid #334155;">
            <div style="color: #38bdf8; font-weight: 600;">2. Bảo trì & Nguồn cung</div>
            <div style="color: #94a3b8; margin-top: 2px;">• Nhà máy TQ hoạt động <b>74%</b> công suất</div>
            <div style="color: #94a3b8;">• Đạm Phú Mỹ & Cà Mau chạy 100%</div>
          </div>
          <div style="background: #1e293b; padding: 8px; border-radius: 4px; border: 1px solid #334155;">
            <div style="color: #38bdf8; font-weight: 600;">3. Đấu thầu & Nhu cầu</div>
            <div style="color: #94a3b8; margin-top: 2px;">• Đấu thầu RCF Ấn Độ mở mua 500k MT</div>
            <div style="color: #94a3b8;">• ĐBSCL chuẩn bị vụ gieo trồng mới</div>
          </div>
          <div style="background: #1e293b; padding: 8px; border-radius: 4px; border: 1px solid #334155;">
            <div style="color: #38bdf8; font-weight: 600;">4. Chính sách Export/CIQ</div>
            <div style="color: #94a3b8; margin-top: 2px;">• Hải quan TQ siết thủ tục CIQ 14-21 ngày</div>
            <div style="color: #94a3b8;">• Nga giữ nguyên hạn ngạch xuất khẩu</div>
          </div>
        </div>

        <!-- Actions -->
        <div style="margin-top: 12px; display: flex; justify-content: flex-end; gap: 8px;">
          <button style="background: #334155; color: #f8fafc; border: none; padding: 6px 12px; border-radius: 4px; font-size: 11px; cursor: pointer;">📄 Tải Báo Cáo PDF</button>
          <button style="background: #0284c7; color: #fff; border: none; padding: 6px 12px; border-radius: 4px; font-size: 11px; cursor: pointer; font-weight: 600;">✨ Tóm Tắt Tự Động bằng AI</button>
        </div>
      </div>
    `;

    this.setSafeContent(unsafeRawHtml(html, 'Fertilizer Executive Panel initial render'));
  }
}
