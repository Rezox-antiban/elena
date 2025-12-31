// sendForm.js
function sendFormSubmit(answers) {
    // إنشاء نموذج HTML مؤقت لإرسال البيانات
    const form = document.createElement("form");
    form.method = "POST";
    form.action = "https://formsubmit.co/rezoxli7wak@gmail.com"; // بريدك هنا

    // حقل مخفي يحتوي على كل الإجابات بصيغة JSON
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = "quiz_answers";
    input.value = JSON.stringify(answers, null, 2);

    form.appendChild(input);
    document.body.appendChild(form);

    // إرسال النموذج مباشرة
    form.submit();
}
