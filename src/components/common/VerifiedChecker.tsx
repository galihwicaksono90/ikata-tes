import { useAppSelector } from "redux/hooks";
import { NotLoggedIn } from "components/common";
import {
  RulesVacancies,
  RulesFinalProjects,
  RulesScholarships,
  RulesArticles,
  RulesNews,
  RulesActivities,
} from "generated/graphql";

interface VerifiedCheckerProps {
  light?: boolean;
  children?: React.ReactNode;
  rules:
    | RulesVacancies
    | RulesFinalProjects
    | RulesScholarships
    | RulesArticles
    | RulesNews
    | RulesActivities;
}

export const VerifiedChecker = ({
  children,
  light,
  rules,
}: VerifiedCheckerProps) => {
  const user = useAppSelector((state) => state.auth.user);

  if (!rules) {
    return null;
  }
  if (
    (!user && rules === RulesVacancies.Verified) ||
    (!user && rules === RulesVacancies.Registered)
  ) {
    return <NotLoggedIn light={light} />;
  }

  if (user && !user?.isVerified && rules === RulesVacancies.Verified) {
    return <NotLoggedIn unverified light={light} />;
  }

  return <>{children}</>;
};
