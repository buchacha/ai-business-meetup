function togglePrompt(button) {
    // Corrected to handle the new structure where .prompt-content is a sibling of .case-actions
    const actions = button.closest('.case-actions');
    const content = actions.nextElementSibling;

    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "Скрыть промпт";
    } else {
        content.style.display = "none";
        button.textContent = "Раскрыть промпт";
    }
}

function copyPrompt(button) {
    const code = button.previousElementSibling;
    const text = code.innerText;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.textContent;
        button.textContent = "Скопировано!";
        button.style.backgroundColor = "#28a745";

        setTimeout(() => {
            button.textContent = originalText;
            button.style.backgroundColor = "";
        }, 2000);
    }).catch(err => {
        console.error('Ошибка при копировании: ', err);
    });
}
