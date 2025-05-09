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

            if (data[0]['Loaded Personal Data']) {
                currentGameData = {
                    ...data[0]['Loaded Personal Data'],
                    'Real Time Data': data[0]['Real Time Data'],
                    'Question': data[0]['Question'] || '',
                    quizStats: data[0]['Loaded Personal Data'].quizStats || {
                    totalCorrect: 0,
                    totalWrong: 0,
                    answeredAirports: {}
    }
                };
                originalMapData = data[0]['Map Data'];
                startGameArea(currentGameData, originalMapData);
                loadGameDialog.close();
            } else {
                loadStatus.textContent = "Invalid username or password";
            }
        } catch (error) {
            console.error("Load Game Error:", error);
            loadStatus.textContent = "Connection error. Please try again.";
        }
    });