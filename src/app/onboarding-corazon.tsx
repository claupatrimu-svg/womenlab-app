import QuestionScreen from "@/components/ui/QuestionScreen";

export default function OnboardingCorazonScreen() {

  return (

    <QuestionScreen
    title={"¿Cómo se siente\n tu corazón hoy?"}
      options={[
        "En paz",
        "Con esperanza",
        "Triste",
        "Con miedo",
        "Con gratitud",
        "Otra...",
      ]}
      next="/onboarding-realidad"
    />

  );

}