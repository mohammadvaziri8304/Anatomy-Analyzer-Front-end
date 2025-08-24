import axios from "axios";

export async function uploadImageA(file, API_BASE) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post(`${API_BASE}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.error("❌ خطا در آپلود تصویر:", error.response?.data || error.message);
    throw error;
  }
}

export async function uploadImageB(file, API_BASE) {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await axios.post(`${API_BASE}`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return res.data;
  } catch (error) {
    console.error("❌ خطا در آپلود تصویر:", error.response?.data || error.message);
    throw error;
  }
}

export async function sendPoints(imageId, points, API_BASE) {
  try {
    const res = await axios.post(`${API_BASE}`, {
      image_id: imageId,
      points: points,
    });
    return res.data;
  } catch (error) {
    console.error("❌ خطا در ارسال نقاط:", error.response?.data || error.message);
    throw error;
  }
}