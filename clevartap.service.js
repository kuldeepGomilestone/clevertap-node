const CleverTap = require("clevertap");

class CleverTapService {
  constructor() {
    const ACCOUNT_ID = "xxxxxx";
    const PASSCODE = "xxxxx";
    const REGION = CleverTap.REGIONS.EUROPE;

    this.clevertap = CleverTap.init(ACCOUNT_ID, PASSCODE, REGION);
  }

  // Upload data
  async upload(data, options = { debug: 1, batchSize: 1000 }) {
    return this.clevertap.upload(data, options);
  }

  // Get events
  async getEvents(query, options = { debug: 1, batchSize: 6000 }) {
    return this.clevertap.events(query, options);
  }

  // Get profile
  async getProfile(query) {
    return this.clevertap.profile(query);
  }

  // Get multiple profiles
  async getProfiles(query, options = { debug: 1, batchSize: 200 }) {
    return this.clevertap.profiles(query, options);
  }

  // Campaign APIs
  async estimateCampaign(payload, options = { debug: 1 }) {
    return this.clevertap.targets(this.clevertap.TARGET_ESTIMATE, payload, options);
  }

  async createCampaign(payload, options = { debug: 1 }) {
    return this.clevertap.targets(this.clevertap.TARGET_CREATE, payload, options);
  }

  async listCampaigns(payload, options = { debug: 1 }) {
    return this.clevertap.targets(this.clevertap.TARGET_LIST, payload, options);
  }

  async stopCampaign(payload, options = { debug: 1 }) {
    return this.clevertap.targets(this.clevertap.TARGET_STOP, payload, options);
  }

  async getCampaignResult(payload, options = { debug: 1 }) {
    return this.clevertap.targets(this.clevertap.TARGET_RESULT, payload, options);
  }

  // Report APIs
  async getMessageReports(payload, options = { debug: 1 }) {
    return this.clevertap.getMessageReports(payload, options);
  }

  async getRealTimeCounts(payload, options = { debug: 1 }) {
    return this.clevertap.realTimeCounts(payload, options);
  }

  async getTopPropertyCounts(payload, options = { debug: 1 }) {
    return this.clevertap.topPropertyCounts(payload, options);
  }

  async getTrends(payload, options = { debug: 1 }) {
    return this.clevertap.trends(payload, options);
  }
}

module.exports = new CleverTapService();
