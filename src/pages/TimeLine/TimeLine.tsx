import { Menu } from "@/components/Menu";
import { Container } from "./TimeLine.styles";

export const TimeLine: React.FC = () => {
  return (
    <Container>
      <div style={{position:"absolute",zIndex:"999"}}>
        <Menu/>
      </div>
      
      <div className="container">
        <div className="timeline">
          <div className="timeline-box" id="primary">
            <div className="icon">
              <i className="far fa-grin-wink"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Primary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="time">1 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="success">
            <div className="icon">
              <i className="far fa-grin-tears"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Success</span>
              </h4>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aliquam necessitatibus numquam earum ipsa fugiat veniam
            suscipit, officiis repudiandae, eum recusandae neque
            dignissimos. Cum fugit laboriosam culpa, repellendus esse
            commodi deserunt.
              </p>
              <p className="time">3 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="danger">
            <div className="icon">
              <i className="far fa-grin-hearts"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Danger</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="time">8 Hours Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="secondary">
            <div className="icon">
              <i className="far fa-grin-beam-sweat"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Secondary</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="time">1 Days Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="warning">
            <div className="icon">
              <i className="far fa-grimace"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Warning</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="time">3 Days Ago</p>
            </div>
          </div>

          <div className="timeline-box" id="info">
            <div className="icon">
              <i className="far fa-grin"></i>
            </div>
            <div className="timeline-body">
              <h4 className="header">
                <span className="badge">Info</span>
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aliquam necessitatibus numquam earum ipsa fugiat veniam
                suscipit, officiis repudiandae, eum recusandae neque
                dignissimos. Cum fugit laboriosam culpa, repellendus esse
                commodi deserunt.
              </p>
              <p className="time">6 Days Ago</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};