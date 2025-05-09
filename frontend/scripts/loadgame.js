    // Load Game -lomake
    loadGameForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const formData = {
            Username: e.target.username.value,
            Password: e.target.password.value
        };
    
        try {
            const response = await fetch("http://127.0.0.1:5000/game/users/load", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });
    
            const data = await response.json();
            console.log('Load game response:', data);
    
            if (data[0]['Loaded Personal Data']) {
                currentGameData = {
                    ...data[0]['Loaded Personal Data'],
                    'Real Time Data' : data[0]['Real Time Data'],
                    'Question' : ''
                };
                console.log('Data: ', currentGameData)
                startGameArea(currentGameData, data[0]['Map Data']);
                loadGameDialog.close();
            } else {
                loadStatus.textContent = "Käyttäjätunnus tai salasana väärä.";
            }
        } catch (error) {
            console.error("Virhe Load Game:", error.message);
        }
    });