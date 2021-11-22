package enade;

public class Boeing757 extends Aviao {
    public Boeing757() {
        formaVoar = new VoarDia();
        formaPousar = new PousarDia();
    }
    public void informarDados() {
        System.out.println("Informando dados de um Boeing 757.");
    }
    }