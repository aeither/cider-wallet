import Navigation from '@/components/Navigation'
import RouteTransition from '@/components/RouteTransition'
import { Card, Container, Loading, Row } from '@nextui-org/react'
import { Fragment, ReactNode } from 'react'
import AccountPicker from '@/components/AccountPicker'
import PageHeaderMobile from '@/components/PageHeaderMobile'

/**
 * Types
 */
interface Props {
  initialized: boolean
  children: ReactNode | ReactNode[]
}

/**
 * Container
 */
export default function Layout({ children, initialized }: Props) {
  return (
    <Container
      display="flex"
      justify="center"
      alignItems="center"
      css={{
        width: '100vw',
        height: '100vh',
        paddingLeft: 0,
        paddingRight: 0
      }}>
      <Row
        css={{
          display: 'flex',
          padding: 16,
          position: 'sticky',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          boxShadow: '0 -30px 20px $backgroundColorLight',
          backgroundColor: '$backgroundColorLight',
          zIndex: 250,
          top: 0,
          left: 0,
          '@xs': {
            display: 'none'
          }
        }}>
        <PageHeaderMobile title="Sessions">
          <AccountPicker />
        </PageHeaderMobile>
      </Row>

      <Card
        bordered={{ '@initial': false, '@xs': true }}
        borderWeight={{ '@initial': 'light', '@xs': 'light' }}
        css={{
          height: '100%',
          width: '100%',
          backgroundColor: '$backgroundColor',

          justifyContent: initialized ? 'normal' : 'center',
          alignItems: initialized ? 'normal' : 'center',
          borderRadius: 0,
          paddingBottom: 5,
          '@xs': {
            borderRadius: '$lg',
            height: '95vh',
            maxWidth: '450px'
          }
        }}>
        {initialized ? (
          <Fragment>
            <RouteTransition>
              <Card.Body
                css={{
                  display: 'block',
                  paddingLeft: 2,
                  paddingRight: 2,
                  paddingBottom: '40px',
                  '@xs': {
                    padding: '8px',
                    paddingBottom: '20px'
                  }
                }}>
                {children}
              </Card.Body>
            </RouteTransition>

            <Card.Footer
              css={{
                display: 'none',
                py: 16,
                position: 'sticky',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                boxShadow: '0 -30px 20px $backgroundColorLight',
                backgroundColor: '$backgroundColorLight',
                zIndex: 200,
                bottom: 0,
                left: 0,
                '@xs': {
                  display: 'flex'
                }
              }}>
              <Navigation />
            </Card.Footer>
          </Fragment>
        ) : (
          <Loading />
        )}
      </Card>
      <Row
        css={{
          display: 'flex',
          padding: 16,
          position: 'sticky',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          boxShadow: '0 -30px 20px $backgroundColorLight',
          backgroundColor: '$backgroundColorLight',
          zIndex: 250,
          bottom: 0,
          left: 0,
          '@xs': {
            display: 'none'
          }
        }}>
        <Navigation />
      </Row>
    </Container>
  )
}
