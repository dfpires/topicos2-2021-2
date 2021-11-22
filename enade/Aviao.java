package enade;

// não pode ser instanciada - new Aviao()
public abstract class Aviao {
    
    protected Pousar formaPousar; // pode receber PousarDia e PousarNoite

    protected Voar formaVoar; // pode receber VoarDia e VoarNoite

    public Aviao() {

    }

    public void performanceVoar() {
        formaVoar.voar(); // polimorfismo
    }
    public void performancePousar() {
        formaPousar.pousar(); // polimorfismo
    }

    public void setVoar(Voar v) {
        formaVoar = v;
    }
    public void setPousar(Pousar p) {
        formaPousar = p;
    }

    public abstract void informarDados();
}
