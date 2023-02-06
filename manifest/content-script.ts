export type ManifestContentScript = {
  matches: string[]
  js?: string[]

  css?: string[]

  match_about_blank?: boolean
  match_origin_as_fallback?: boolean
  all_frames?: boolean

  world?: "ISOLATED" | "MAIN"

  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#run_time
   */
  run_at?: "document_start" | "document_end" | "document_idle"

  /**
   * https://developer.chrome.com/docs/extensions/mv3/content_scripts/#matchAndGlob
   */
  exclude_matches?: string[]
  exclude_globs?: string[]
  include_globs?: string[]
}
