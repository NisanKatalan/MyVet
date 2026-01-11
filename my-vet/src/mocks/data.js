// src/mocks/data.js

// רשימת בעלי חיות (לקוחות)
export const owners = [
  { id: 1, name: "ישראל ישראלי", phone: "050-1234567", email: "israel@example.com" },
  { id: 2, name: "דנה כהן", phone: "052-7654321", email: "dana@example.com" }
];

// רשימת חיות (התיקים הרפואיים)
export const pets = [
  {
    id: 101,
    ownerId: 1,
    name: "רקס",
    type: "כלב",
    breed: "לברדור",
    age: 5,
    chronicConditions: ["סוכרת", "רגישות לעוף"], // לפי מסמך הייזום: "תמונה רפואית קצרה"
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 102,
    ownerId: 2,
    name: "מיצי",
    type: "חתול",
    breed: "פרסי",
    age: 3,
    chronicConditions: [],
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=300&q=80"
  }
];

// היסטוריית ביקורים (דוגמה לתיק רפואי)
export const visits = [
  {
    id: 501,
    petId: 101, // הביקור של רקס
    date: "2025-12-10",
    reason: "בדיקת דם שגרתית",
    diagnosis: "רמות סוכר מאוזנות",
    vetName: "ד״ר כהן"
  },
  {
    id: 502,
    petId: 101,
    date: "2026-01-05",
    reason: "צליעה ברגל שמאל",
    diagnosis: "חשד למתיחת שריר, ניתן שיכוך כאבים",
    vetName: "ד״ר לוי"
  }
];