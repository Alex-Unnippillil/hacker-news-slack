import Layout from "@/components/layout";
import SlackButton from "@/components/slack-button";
import va from "@vercel/analytics";
import {
  BellRing,
  Share2,
  Workflow,
  Database,
  Zap,
  ShieldCheck,
  Search,
} from "lucide-react";
import Balancer from "react-wrap-balancer";

const features = [
  {
    title: "Real-time monitoring",
    description:
      "Vercel Cron Jobs wake the app every few minutes to fetch the newest posts and comments from the Hacker News API so nothing slips past your team.",
    icon: BellRing,
  },
  {
    title: "Signal over noise",
    description:
      "Each workspace stores its own list of keywords and company names in Upstash Redis. We use optimized regular expressions to match only the discussions that matter to you.",
    icon: Search,
  },
  {
    title: "Context-rich delivery",
    description:
      "Messages unfurl directly inside Slack with highlighted matches, author info, and links back to the original thread so your teammates can jump in instantly.",
    icon: Share2,
  },
];

const workflow = [
  {
    title: "Connect your Slack workspace",
    description:
      "Install the bot, choose the channel where alerts should land, and define the list of keywords that describe your products, team, or competitors.",
    icon: Workflow,
  },
  {
    title: "Scheduled Hacker News scans",
    description:
      "A serverless cron job hosted on Vercel continuously requests the Hacker News Firebase API and keeps track of the last processed post ID.",
    icon: Zap,
  },
  {
    title: "Keyword intelligence",
    description:
      "Mentions are evaluated against cached workspace preferences stored in Upstash Redis, ensuring fast matching without ever touching your infrastructure.",
    icon: Database,
  },
  {
    title: "Verified Slack notifications",
    description:
      "Every outbound request is cryptographically signed and delivered through the Slack Web API, producing rich unfurls and analytics for each team.",
    icon: ShieldCheck,
  },
];

const stack = [
  {
    title: "Next.js 13 + React 18",
    description:
      "The entire experience runs on a single Next.js app: marketing page, Slack OAuth flow, and serverless API routes that power the integration.",
  },
  {
    title: "TypeScript-first backend",
    description:
      "Shared utility libraries type the Hacker News crawler, Slack signature verification, and background jobs for predictable automation.",
  },
  {
    title: "Tailwind CSS styling",
    description:
      "Utility classes let us express gradients, typography, and responsive layouts without leaving the component file.",
  },
  {
    title: "Upstash Redis",
    description:
      "A globally distributed Redis instance stores workspace tokens, keyword lists, and deduplication checkpoints for cron executions.",
  },
  {
    title: "Vercel Cron Jobs",
    description:
      "Scheduled invocations keep the bot in sync with new Hacker News activity while the rest of the app remains serverless and on-demand.",
  },
  {
    title: "Slack Platform & Hacker News API",
    description:
      "Slack's Web API handles message delivery and unfurls while the public Firebase endpoints from Hacker News supply the stream of discussions.",
  },
];

export default function Home() {
  return (
    <Layout
      meta={{
        title: "Slacker — Hacker News alerts for product teams",
        description:
          "Understand how Slacker tracks Hacker News mentions with Next.js, Upstash Redis, and Slack to keep your workspace informed.",
      }}
    >
      <div className="w-full max-w-5xl px-6 md:px-12 space-y-24 py-10">
        <section className="text-center space-y-6">
          <p className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-gray-200">
            Project overview
          </p>
          <h1 className="bg-gradient-to-br from-white via-white to-[#f6c57f] bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
            <Balancer>
              Hacker News intelligence for Slack-first teams
            </Balancer>
          </h1>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Slacker keeps product, support, and developer relations teams aware of new community conversations. We continuously watch Hacker News, filter posts with workspace-specific keywords, and deliver human-friendly alerts right inside the channels where decisions happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <SlackButton
              onClick={() => va.track("Install Clicked")}
              text="Add Slacker to Slack"
              url={`https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,links:read,links:write,commands,team:read&client_id=${process.env.NEXT_PUBLIC_SLACK_CLIENT_ID}`}
            />
            <a
              href="https://github.com/vercel-labs/slacker"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-sm"
            >
              Explore the source on GitHub →
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">Why teams choose Slacker</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <feature.icon className="h-6 w-6 text-amber-200" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">How the integration works</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {workflow.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-white/10 bg-black/30 p-6 backdrop-blur-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                  <step.icon className="h-6 w-6 text-amber-200" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-white">The technology powering Slacker</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6 text-center">
          <h2 className="text-3xl font-semibold text-white">
            Ready to stay ahead of every mention?
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
            Install the Slack app to start capturing the conversations that matter most to your product and community teams. Configuration takes just a few minutes and the automation runs hands-free afterward.
          </p>
          <SlackButton
            onClick={() => va.track("Install Clicked")}
            text="Install the Slack app"
            url={`https://slack.com/oauth/v2/authorize?scope=chat:write,chat:write.public,links:read,links:write,commands,team:read&client_id=${process.env.NEXT_PUBLIC_SLACK_CLIENT_ID}`}
          />
        </section>
      </div>
    </Layout>
  );
}
