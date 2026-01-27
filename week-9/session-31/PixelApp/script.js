 const colorBox = document.getElementById('colorBox');
        const colorCode = document.getElementById('colorCode');
        const changeColorBtn = document.getElementById('changeColorBtn');
        const toggleEventBtn = document.getElementById('toggleEventBtn');
        const colorForm = document.getElementById('colorForm');
        const colorPicker = document.getElementById('colorPicker');

        let eventsEnabled = true;
        let currentColor = { r: 128, g: 128, b: 128 };

        function updateColorDisplay() {
            const rgbColor = `rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b})`;
            colorBox.style.backgroundColor = rgbColor;
            colorCode.textContent = rgbColor;
        }

        function changeColor(event) {
            event.stopPropagation(); // Prevent event bubbling
            currentColor = {
                r: Math.floor(Math.random() * 256),
                g: Math.floor(Math.random() * 256),
                b: Math.floor(Math.random() * 256)
            };
            updateColorDisplay();
        }

        function adjustColor(color, amount) {
            currentColor[color] = Math.max(0, Math.min(255, currentColor[color] + amount));
            updateColorDisplay();
        }

        function handleKeyPress(event) {
            if (!eventsEnabled) return;

            const key = event.key.toLowerCase();
            if (key === 'r' || key === 'g' || key === 'b') {
                event.preventDefault(); // Prevent default key behavior
                adjustColor(key, event.shiftKey ? -10 : 10);
            }
        }

        function handleMouseMove(event) {
            if (!eventsEnabled) return;

            const boxRect = colorBox.getBoundingClientRect();
            const x = event.clientX - boxRect.left;
            const y = event.clientY - boxRect.top;

            currentColor.r = Math.floor((x / boxRect.width) * 255);
            currentColor.g = Math.floor((y / boxRect.height) * 255);
            updateColorDisplay();
        }

        function toggleEvents() {
            eventsEnabled = !eventsEnabled;
            toggleEventBtn.textContent = eventsEnabled ? 'Disable Keyboard Events' : 'Enable Keyboard Events';
            
            if (eventsEnabled) {
                colorBox.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('keydown', handleKeyPress);
            } else {
                colorBox.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('keydown', handleKeyPress);
            }
        }

        function handleFormSubmit(event) {
            event.preventDefault(); // Prevent form submission
            const colorValue = colorPicker.value;
            currentColor = {
                r: parseInt(colorValue.slice(1, 3), 16),
                g: parseInt(colorValue.slice(3, 5), 16),
                b: parseInt(colorValue.slice(5, 7), 16)
            };
            updateColorDisplay();
        }

        // Event Listeners
        changeColorBtn.addEventListener('click', changeColor);
        toggleEventBtn.addEventListener('click', toggleEvents);
        colorForm.addEventListener('submit', handleFormSubmit);

        // Event Delegation for future dynamically added elements
        document.addEventListener('click', function(event) {
            if (event.target.matches('.color-box')) {
                changeColor(event);
            }
        });

        // Initial setup
        updateColorDisplay();
        toggleEvents(); // Enable keyboard events by default