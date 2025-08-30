document.addEventListener('DOMContentLoaded', () => {
    const transcriptInput = document.getElementById('transcript-input');
    const summarizeBtn = document.getElementById('summarize-btn');
    const summaryText = document.getElementById('summary-text');

    summarizeBtn.addEventListener('click', () => {
        const transcript = transcriptInput.value.trim();
        if (transcript === '') {
            summaryText.textContent = 'Please paste a transcript first.';
            return;
        }

        // Simple summarization logic (placeholder)
        // This takes the first two sentences.
        const sentences = transcript.match(/[^.!?]+[.!?]+/g) || [];
        let summary = '';

        if (sentences.length > 0) {
            summary = sentences.slice(0, 2).join(' ');
        } else {
            // If no sentences, take the first 150 characters.
            summary = transcript.substring(0, 150) + '...';
        }

        if (summary.length === 0) {
             summaryText.textContent = 'Could not generate a summary from the provided text.';
        } else {
            summaryText.textContent = summary;
        }
    });
});
