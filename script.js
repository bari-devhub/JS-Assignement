document.addEventListener('DOMContentLoaded', () => {
            // 1. Get the modal and the trigger element
            const contactModal = new bootstrap.Modal(document.getElementById('contactModal'));
            const contactTrigger = document.getElementById('contactTrigger');

            // 2. Click Handler: Open modal when 'Abdul Bari Khan' is clicked
            contactTrigger.addEventListener('click', () => {
                contactModal.show();
            });

            // 3. Auto-Open on Load: Display the modal immediately after the page loads
            contactModal.show();
        });