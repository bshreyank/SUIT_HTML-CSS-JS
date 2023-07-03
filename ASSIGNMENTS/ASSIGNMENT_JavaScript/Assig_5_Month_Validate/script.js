function getGreeting() {
      const currentHour = new Date().getHours();
    
      if (currentHour >= 12 && currentHour < 16) {
        return 'Good Afternoon';
      } else if (currentHour >= 16 && currentHour < 24) {
        return 'Good Evening';
      } else if (currentHour >= 0 && currentHour < 4) {
        return 'Good Night';
      } else {
        return 'Good Morning';
      }
    }
    
    const greeting = getGreeting();
    console.log(greeting);
    