Object..defineProperty(window, 'unlock', {
            get: function() {
                window.location.href = "secret.html";
                return "Redirecting...";
            }
});