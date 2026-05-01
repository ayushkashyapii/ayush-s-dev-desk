import posthog from "posthog-js";

const POSTHOG_KEY = "pk_live_4b970e86f447851f20c5ea71cf0691f0";
const POSTHOG_API_HOST =
  "https://retainly-ingest-worker.kashyap11ayush02.workers.dev/";

if (typeof window !== "undefined") {
  posthog.init(POSTHOG_KEY, {
    api_host: POSTHOG_API_HOST,
  });
}

export { posthog };
