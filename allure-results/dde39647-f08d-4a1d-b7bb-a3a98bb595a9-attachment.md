# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e4]: 
  - heading "เข้าสู่ระบบ" [level=2] [ref=e5]
  - generic [ref=e6]:
    - generic [ref=e7]: 
    - text: ไม่พบบัญชีผู้ใช้
  - generic [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]: ชื่อผู้ใช้
      - generic [ref=e11]:
        - generic [ref=e12]: 
        - textbox "ชื่อผู้ใช้" [ref=e13]:
          - /placeholder: กรุณาใส่ชื่อผู้ใช้
    - generic [ref=e14]:
      - generic [ref=e15]: รหัสผ่าน
      - generic [ref=e16]:
        - generic [ref=e17]: 
        - textbox "รหัสผ่าน" [ref=e18]:
          - /placeholder: กรุณาใส่รหัสผ่าน
        - generic [ref=e19] [cursor=pointer]: 
    - generic [ref=e20]:
      - generic [ref=e21]:
        - checkbox "จดจำฉัน" [ref=e22]
        - text: จดจำฉัน
      - link "ลืมรหัสผ่าน?" [ref=e23] [cursor=pointer]:
        - /url: forgot_password.php
    - button "เข้าสู่ระบบ " [ref=e24] [cursor=pointer]:
      - text: เข้าสู่ระบบ
      - generic [ref=e25]: 
    - button "กลับไปที่หน้าหลัก " [ref=e26] [cursor=pointer]:
      - text: กลับไปที่หน้าหลัก
      - generic [ref=e27]: 
  - generic [ref=e28]:
    - text: ยังไม่มีบัญชี?
    - link "สมัครสมาชิก" [ref=e29] [cursor=pointer]:
      - /url: register_user.php
```