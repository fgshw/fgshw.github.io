from flask import Flask, render_template, request
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

app = Flask(__name__)

# โหลดชุดข้อมูล (เช่น จาก Kaggle)
df = pd.read_csv('C:\\Users\\N47 - Rifu\\Downloads\\Decision.tree\\adult.csv')
df = pd.get_dummies(df, drop_first=True)

# กำหนดฟีเจอร์และเป้าหมาย (target)
X = df.drop('income_>50K', axis=1)
y = df['income_>50K']

# แบ่งข้อมูลสำหรับฝึกและทดสอบ
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)

# สร้างโมเดล Decision Tree
model = DecisionTreeClassifier()
model.fit(X_train, y_train)

@app.route('/')
def index():
    return render_template('page.html')

@app.route('/predict', methods=['POST'])
def predict():
    # รับข้อมูลจากแบบฟอร์ม
    data = request.form.to_dict()

    # แปลงข้อมูลเป็น DataFrame เพื่อให้โมเดลทำนาย
    input_data = pd.DataFrame([data], columns=X.columns)

    # เปลี่ยนข้อมูลเป็นชนิด float
    input_data = input_data.astype(float)

    # ทำการทำนาย
    prediction = model.predict(input_data)[0]

    # แปลงผลลัพธ์ที่คาดการณ์ให้อยู่ในรูปแบบที่เข้าใจง่าย
    result = 'มากกว่า 50K' if prediction == 1 else 'ต่ำกว่า 50K'

    # ส่งผลลัพธ์กลับไปที่หน้าเว็บไซต์
    return render_template('page.html', result=result)

# Route ใหม่สำหรับลบเฉพาะค่าการทำนาย (result)
@app.route('/clear_result', methods=['POST'])
def clear_result():
    # ส่งค่ากลับไปที่หน้าโดยไม่แสดงผลลัพธ์ (result = None)
    return render_template('page.html', result=None)

if __name__ == '__main__':
    app.run(debug=