# ตัวอย่างการใช้งาน Markdown บน GitHub และ Linux ที่ใช้งานได้จริง

## ลิงก์อินไลน์และการสร้างจุดยึด (Hyperlink & Anchor)

คุณสามารถสร้างลิงก์อินไลน์แบบนี้:  
[GitHub Pages](https://pages.github.com/)

หรือเพียงวาง URL ก็จะกลายเป็นลิงก์โดยอัตโนมัติ:  
https://github.com

**ลิงก์ไปยังหัวข้อในเอกสารเดียวกัน (Anchor Links):**
- [Sample Section](#sample-section)
- [Helpful Section](#thisll-be-a-helpful-section-about-the-greek-letter-θ)
- [First Non-Unique Section](#this-heading-is-not-unique-in-the-file)
- [Second Non-Unique Section](#this-heading-is-not-unique-in-the-file-1)

## Example headings

### Sample Section

### This'll be a _Helpful_ Section About the Greek Letter Θ!
A heading with special characters, UTF-8, and formatting.

### This heading is not unique in the file

TEXT 1

### This heading is not unique in the file

TEXT 2

---

## ลิงก์สัมพันธ์ (Relative Link)

เชื่อมไปยังไฟล์ใน repo เดียวกัน:  
[Contribution guidelines for this project](docs/CONTRIBUTING.md)

---

## การแสดงภาพ (Image)

แสดงภาพด้วย Markdown:  
![Octocat](https://myoctocat.com/assets/images/base-octocat.svg)

หรือแสดงภาพจากไฟล์ใน repo:  
`![Electrocat](/assets/images/electrocat.png)`

---

## รายการ (List)

**แบบไม่เรียงลำดับ:**
- George Washington
* John Adams
+ Thomas Jefferson

**แบบเรียงลำดับ:**
1. James Madison
2. James Monroe
3. John Quincy Adams

**รายการซ้อนกัน:**
1. First list item
   - First nested list item
     - Second nested list item

---

## รายการงาน (Task List)

- [x] #739
- [ ] https://github.com/octo-org/octo-repo/issues/740
- [ ] Add delight to the experience when all tasks are complete :tada:
- [ ] \(Optional) Open a followup issue

---

## กา���กล่าวถึง (Mention) และอ้างอิงปัญหา (Issue/PR Reference)

@octocat :+1: This PR looks great - it's ready to merge! :shipit:

@github/support What do you think about these updates?

อ้างอิง issue: #1  
อ้างอิง pull request: #5

---

## การใช้อีโมจิ (Emoji)

พิมพ์ :EMOJICODE: เช่น :sparkles: :tada: :rocket: :100:

---

## การแสดงเชิงอรรถ (Footnote)

Here is a simple footnote[^1].  
A footnote can also have multiple lines[^2].

[^1]: My reference.
[^2]: To add line breaks within a footnote, prefix new lines with 2 spaces.  
  This is a second line.

---

## การแจ้งเตือน (Callout/Admonition)

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.

---

## การซ่อนเนื้อหาด้วย HTML

<!-- This content will not appear in the rendered Markdown -->

---

## การละเว้นการจัดรูปแบบ

Let's rename \*our-new-project\* to \*our-old-project\*.

---

## การแบ่งบรรทัดและย่อหน้า

บรรทัดใหม่ด้วยสอง space  
จะขึ้นบรรทัดใหม่

This example\
Will span two lines

This example<br/>
Will span two lines

แยกย่อหน้าด้วยบรรทัดว่าง

---

## Code Block

โค้ดบรรทัดเดียว: `echo "hello world"`

โค้ดหลายบรรทัด:
```bash
echo "Hello, Linux!"
ls -al
```

---

## เคล็ดลับการใช้งานบน Linux

- สามารถเขียนไฟล์ .md นี้ด้วย nano, vim, หรือ code แล้วเปิดบน GitHub ได้ทันที
- ใช้คำสั่ง `cat`, `less`, `head`, `tail` เพื่อดูไฟล์ในเทอร์มินัล

---

## ทดสอบได้จริง

บันทึกไฟล์นี้เป็นชื่อ `github-markdown-advanced-demo.md` แล้วเปิดดูบน GitHub หรือแสดงผลด้วย `glow` หรือ `mdcat` บน Linux!