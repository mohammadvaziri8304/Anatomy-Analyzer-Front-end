import { useState, useRef } from "react";
import { uploadImageA, sendPoints } from "../services/UploadService";
import "../styles/UploadForm.css";

function UploadFormA({ image_url, points_url, num_of_points }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [points, setPoints] = useState([]);
  const [result, setResult] = useState("");
  const [imageId, setImageId] = useState(null);
  const [loading, setLoading] = useState(false);
  const imageRef = useRef();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(selectedFile);
    setPoints([]);
    setResult("");
    setImageId(null);
  };

  const handleImageClick = (e) => {
    if (!imageId) {
      alert("برای انتخاب نقاط ابتدا باید تصویر آپلود شود");
      return;
    }
    if (points.length >= num_of_points) return;

    const img = imageRef.current;
    const rect = img.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPoints([...points, { x: Math.round(x), y: Math.round(y) }]);
  };

  const handleDeletePoint = () => {
    if (!imageId) {
      alert("برای حذف نقاط ابتدا باید تصویر آپلود شود");
      return;
    }
    if (points.length == 0) return;

    setPoints(points.slice(0, -1));
  }

  const handleUploadImage = async () => {
    if (!file) {
      alert("لطفاً ابتدا یک عکس انتخاب کنید.");
      return;
    }
    setLoading(true);
    try {
      const data = await uploadImageA(file, image_url);
      if (data.image_id) {
        setImageId(data.image_id);
        alert("✅ تصویر آپلود شد، حالا نقاط را مشخص کنید.");
      }
    } catch {
      alert("❌ خطا در آپلود تصویر. جزئیات در کنسول.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendPoints = async () => {
    if (!imageId) {
      alert("ابتدا باید تصویر آپلود شود.");
      return;
    }
    if (points.length !== num_of_points) {
      alert("تعداد نقاط انتخاب شده نادرست است.");
      return;
    }
    setLoading(true);
    try {
      const data = await sendPoints(imageId, points, points_url);
      setResult(JSON.stringify(data, null, 2));
    } catch {
      alert("❌ خطا در ارسال نقاط. جزئیات در کنسول.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form">
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {!imageId && (
        <button type="button" onClick={handleUploadImage}>
          {loading ? "در حال پردازش..." : "آپلود تصویر"}
        </button>
      )}

      {previewUrl && (
        <div className="image-preview" onClick={handleImageClick}>
          <img src={previewUrl} ref={imageRef} alt="preview" />
            {points.map((p, index) => (
              <span
                key={index}
                className="point-marker"
                style={{
                  top: p.y + "px",
                  left: p.x + "px"
                }}
                title={`نقطه ${index + 1}`}
              />
            ))}
        </div>
        
      )}

      {imageId && (
        <div>
          <p>تعداد نقاط انتخاب‌شده: {points.length} / {num_of_points}</p>
          {points.length > 0 && (
            <button type="button" onClick={handleDeletePoint}>
              حذف آخرین نقطه
            </button>
          )}
          {!result && (
            <button type="button" onClick={handleSendPoints}>
              {loading ? "در حال پردازش..." : "ارسال نقاط"}
            </button>
          )}
        </div>
      )}

      {result && <pre className="result-box">{result}</pre>}
    </div>
  );
}

export default UploadFormA;