    saveAndQuitBtn.addEventListener("click", async () => {
        if (!currentGameData) return;

        try {
            const response = await fetch("http://127.0.0.1:5000/game/users/update", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    'Old Game Data': currentGameData,
                    'New Game Data': currentGameData
                })
            });

            const data = await response.json();

            if (data.Message) {
                alert("Game saved successfully!");
                window.location.reload();
            } else {
                alert("Save failed. Please try again.");
            }
        } catch (error) {
            console.error("Save Error:", error);
            alert("Network error during save.");
        }
    });