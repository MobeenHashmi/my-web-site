class Player {
    constructor(PlayerID, PlayerName, PlayerRuns, PlayerDateofBirth, PlayerShirtNumber) {
      this.PlayerID = PlayerID;
      this.PlayerName = PlayerName;
      this.PlayerRuns = PlayerRuns;
      this.PlayerDateofBirth = PlayerDateofBirth;
      this.PlayerShirtNumber = PlayerShirtNumber;
      Player.totalRuns += PlayerRuns;
    }
  
    DisplayInfo() {
      console.log(`PlayerID: ${this.PlayerID}`);
      console.log(`PlayerName: ${this.PlayerName}`);
      console.log(`PlayerRuns: ${this.PlayerRuns}`);
      console.log(`PlayerDateofBirth: ${this.PlayerDateofBirth}`);
      console.log(`PlayerShirtNumber: ${this.PlayerShirtNumber}`);
    }
  
    GetRuns() {
      return this.PlayerRuns;
    }
  
    AddRuns(runs) {
      this.PlayerRuns += runs;
      Player.totalRuns += runs;
    }
  
    static getTotalRuns() {
      return Player.totalRuns;
    }
  }
  
  Player.totalRuns = 0;
  
  const player1 = new Player(1, "Player 1", 100, "01-01-2000", 10);
  const player2 = new Player(2, "Player 2", 200, "02-02-2000", 20);
  
  console.log("Player 1 Information");
  player1.DisplayInfo();
  
  console.log("Player 2 Information");
  player2.DisplayInfo();
  console.log(`Total Runs: ${Player.getTotalRuns()}`);
  