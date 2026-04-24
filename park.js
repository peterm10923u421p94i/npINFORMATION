<script>
    const overlay = document.getElementById('intro-overlay');

    // Check if the user has already entered the site this session
    if (sessionStorage.getItem('hasEntered')) {
        overlay.style.display = 'none';
        document.body.style.overflow = 'auto';
    } else {
        document.body.style.overflow = 'hidden';
    }

    function enterSite() {
        // Mark as entered so it doesn't show again on refresh/link click
        sessionStorage.setItem('hasEntered', 'true');
        
        overlay.style.opacity = '0';
        overlay.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto';
        
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 1500); 
    }
</script>
