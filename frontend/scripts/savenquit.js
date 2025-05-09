    // Save & Quit -toiminto
    saveAndQuitBtn.addEventListener("click", async () => {
        try {
            const response = await fetch("http://127.0.0.1:5000/game/users/savenquit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(currentGameData)
            });

            const data = await response.json();
            console.log('Save and Quit data:', data);

            if (data.Message) {
                alert("Peli tallennettu onnistuneesti!");
                window.location.reload(); //back to main menu
            } else {
                alert("Tallennus epäonnistui.");
            }
        } catch (error) {
            console.error("Virhe Save Game:", error.message);
        }
    });