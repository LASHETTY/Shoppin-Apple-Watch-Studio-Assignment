type EventCategory = 
  | 'watch_customization'
  | 'navigation'
  | 'purchase'
  | 'interaction'

interface AnalyticsEvent {
  category: EventCategory
  action: string
  label?: string
  value?: number
}

class AnalyticsService {
  private isProduction: boolean

  constructor() {
    this.isProduction = process.env.NODE_ENV === 'production'
  }

  private trackEvent(event: AnalyticsEvent) {
    if (!this.isProduction) {
      console.log('Analytics Event:', event)
      return
    }

    // Placeholder for actual analytics integration
    // Could be Google Analytics, Mixpanel, etc.
    try {
      // Example for Google Analytics (gtag)
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', event.action, {
          event_category: event.category,
          event_label: event.label,
          value: event.value
        })
      }
    } catch (error) {
      console.error('Analytics tracking error:', error)
    }
  }

  // Customization Events
  trackWatchCustomization(details: {
    caseType: string
    bandType: string
    size: string
    price: number
  }) {
    this.trackEvent({
      category: 'watch_customization',
      action: 'customize_watch',
      label: `${details.caseType}_${details.bandType}_${details.size}`,
      value: details.price
    })
  }

  // Navigation Events
  trackPageView(pageName: string) {
    this.trackEvent({
      category: 'navigation',
      action: 'page_view',
      label: pageName
    })
  }

  // Purchase Events
  trackPurchaseAttempt(details: {
    watchId: string
    totalPrice: number
  }) {
    this.trackEvent({
      category: 'purchase',
      action: 'purchase_attempt',
      label: details.watchId,
      value: details.totalPrice
    })
  }

  // Interaction Events
  trackInteraction(interactionType: string) {
    this.trackEvent({
      category: 'interaction',
      action: interactionType
    })
  }
}

export const Analytics = new AnalyticsService()
