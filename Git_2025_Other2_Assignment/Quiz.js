document.addEventListener('DOMContentLoaded', function() {
    const answerButton = document.querySelector('input[type="button"][value="解答する"]');

    answerButton.addEventListener('click', function() {
        const selectedOption = document.querySelector('input[name="quiz"]:checked');

        if (selectedOption) {
            if (selectedOption.value === '顧客') {
                alert('正解！');
            } else {
                alert('不正解！');
            }
        } else {
            alert('選択してください。'); // 何も選択されていない場合
        }
    });
});