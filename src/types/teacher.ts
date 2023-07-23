export interface YoutubeResponse {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: {
      publishedAt: string;
      channelId: string;
      title: string;
      description: string;
      thumbnails: {
        default: {
          url: string;
        };
        medium: {
          url: string;
        };
        high: {
          url: string;
        };
      };
      channelTitle: string;
      playlistId: string;
      position: number;
      resourceId: {
        kind: string;
        videoId: string;
      };
    };
  }[];
}

export interface Item {
  statistics: any;
  kind: string;
  etag: string;
  id: string;
  snippet: Snippet;
}

export interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: Thumbnails;
  channelTitle: string;
  playlistId: string;
  position: number;
  resourceId: ResourceId;
  videoOwnerChannelTitle: string;
  videoOwnerChannelId: string;
}

export interface Thumbnails {
  default: Default;
  medium: Medium;
  high: High;
  standard: Standard;
  maxres?: Maxres;
}

export interface Default {
  url: string;
  width: number;
  height: number;
}

export interface Medium {
  url: string;
  width: number;
  height: number;
}

export interface High {
  url: string;
  width: number;
  height: number;
}

export interface Standard {
  url: string;
  width: number;
  height: number;
}

export interface Maxres {
  url: string;
  width: number;
  height: number;
}

export interface ResourceId {
  kind: string;
  videoId: string;
}

export interface PageInfo {
  totalResults: number;
  resultsPerPage: number;
}
