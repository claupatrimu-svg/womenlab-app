import QuestionScreen from "@/components/ui/QuestionScreen";

export default function OnboardingMenteScreen() {

  return (

    <QuestionScreen
      title="¿Qué ocupa tu mente hoy?"
      options={[
        "Trabajo",
        "Mi salud",
        "Mi familia",
        "Mis hijos",
        "Mi futuro",
        "Otra...",
      ]}
      next="/onboarding-corazon"
    />

  );

}