class Bank{
    public static IFSCCode:string="UTIB0000123"
    private static API_KEY:string="asdfgh134567SDFG%^&";

    static showIFSC(){
        console.log(this.IFSCCode);
    }
    static apiKey(){
        console.log(this.API_KEY);
    }
}
Bank.showIFSC();
console.log(Bank.apiKey())// private X not allowed