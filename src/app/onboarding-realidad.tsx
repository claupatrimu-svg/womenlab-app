import QuestionScreen from "@/components/ui/QuestionScreen";

export default function OnboardingRealidadScreen() {

  return (

    <QuestionScreen
      title={"¿Cuál es\n tu realidad hoy?"}
      options={[
        "Trabajo",
        "Sin trabajo",
        "Soy mamá",
        "Ama de casa",
        "Estoy estudiando",
        "Estoy emprendiendo",
        "Estoy enferma",
        "Estoy cuidando a alguien",
        "Otra...",
      ]}
    next="/registro"
    />

  );

}