
    function calculateAge() {
      const birthDate = document.getElementById('birthDate').value;
      const result = document.getElementById('result');

      if (!birthDate) {
        result.innerHTML = "⚠️ Please select your birth date.";
        return;
      }

      const today = new Date();
      const birth = new Date(birthDate);

      let years = today.getFullYear() - birth.getFullYear();
      let months = today.getMonth() - birth.getMonth();
      let days = today.getDate() - birth.getDate();

      if (days < 0) {
        months--;
        days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      }
      if (months < 0) {
        years--;
        months += 12;
      }

      result.innerHTML = `
        <h2>Your Age:</h2>
        <p><strong>${years}</strong> Years, <strong>${months}</strong> Months, <strong>${days}</strong> Days</p>
      `;
    }