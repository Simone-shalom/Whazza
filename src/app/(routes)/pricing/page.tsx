import Container from "@/components/Container"
import Footer from "@/components/Footer"
import { Pricing } from "@/components/Pricing"
import { PageWrapper } from "@/components/animations/pageWrapper"



const PricingPage = () => {
  return (
      <Container>
        <div className="min-h-screen">
          <PageWrapper>
            <Pricing />
        </PageWrapper>
            <Footer />
          </div>
      </Container>
  )
}

export default PricingPage