import { useState } from "react";
import { uploadImageB } from "../services/UploadService";

function UploadFormB({ image_url }) {
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    const reader = new FileReader();
    reader.onloadend = () => setPreviewUrl(reader.result);
    reader.readAsDataURL(selectedFile);

    setResult(null);
  };

  const handleUploadImage = async () => {
    if (!file) {
      alert("لطفاً ابتدا یک عکس انتخاب کنید.");
      return;
    }
    setLoading(true);
    try {
      const data = await uploadImageB(file, image_url);
      setResult(data);
    } catch (err) {
      alert("❌ خطا در آپلود یا پردازش تصویر. جزئیات در کنسول.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="upload-form">
      <input type="file" accept="image/*" onChange={handleFileChange} />

      {!result && (
        <button type="button" onClick={handleUploadImage} disabled={loading}>
            {loading ? "در حال پردازش..." : "آپلود تصویر"}
        </button>
      )}

      {(previewUrl && !result) && (
        <div className="image-preview">
          <img src={previewUrl} alt="preview" />
        </div>
      )}

      {result && (
        <div className="result-box">
          <h3>نتایج:</h3>
          <ul>
            {result.results.map((r) => (
              <li key={r.angle_index}>
                {r.label}: {r.angle}°
              </li>
            ))}
          </ul>
          {result.annotated_image_url && (
            <img
              src={previewUrl}
              alt="annotated"
              style={{ maxWidth: "100%", marginTop: "1rem" }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default UploadFormB;
